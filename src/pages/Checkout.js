import React from 'react';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
    const stripePromise = loadStripe('pk_test_51IOsoaBqv64bjxGGb9WpB2IZhrTT5fei9WQuDkiUL8IKfKjDYiZka5tmoNJYk1gRDJpfGTf8msvinuX0Fl1foFAo008QIGQ66x');

    return (
        <section className="checkout-wrapper">
            <AmplifyAuthenticator>
                <Elements stripe={stripePromise}>
                    <section>
                        <h2>Time to Checkout?</h2>
                        <CheckoutForm />
                    </section>
                </Elements>
            </AmplifyAuthenticator>
        </section>
<<<<<<< HEAD
    );
};

export default Checkout;
=======
    )
}

export default Checkout
>>>>>>> 4aa4ffacf7268ce3b552c4d3d9c2a9c815af37a4
