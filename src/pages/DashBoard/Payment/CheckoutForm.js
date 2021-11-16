import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Button, CircularProgress } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';

const CheckoutForm = ({ appointment }) => {
    const { price, patientName, _id } = appointment || {};
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();

    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data?.clientSecret));
    }, [price])

    const errorNotify = () => {
        toast.error(errorMsg);
    }
    const successNotify = () => {
        toast.success(successMsg);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        setProcessing(true);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setErrorMsg(error?.message);
            errorNotify();
            setSuccessMsg('');


        }
        else {
            setErrorMsg('');
        }

        //payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: user?.email
                    },
                },
            },
        );

        if (intentError) {
            setErrorMsg(intentError.message);
            setSuccessMsg('');
        }
        else {
            setErrorMsg('');
            setSuccessMsg(paymentIntent?.status);
            successNotify();
            console.log(paymentIntent);
            setProcessing(false);

            //save to database
            const payment = {
                amount: paymentIntent?.amount,
                transaction: paymentIntent?.client_secret.slice('_secret')[0],
                created: paymentIntent?.created,
                cardLast4: paymentMethod?.card?.last4

            }

            const url = `http://localhost:5000/appointments/${_id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data));

        }

    }

    return (
        <div>
            <ToastContainer />
            <h2>Checkout Form</h2>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {processing ? <CircularProgress /> : <Button variant="contained" type="submit" disabled={!stripe || successMsg} sx={{ my: 3 }}>
                    Pay ${price}
                </Button>}
            </form>
        </div>
    );
};

export default CheckoutForm;