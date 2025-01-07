import { ChangeEvent, useState } from "react";

import { Button, Rating, TextField, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { PageHeading } from "@/components/page-heading";
import { useFonts } from "@/hooks/useFonts";

import css from './index.module.css';
import { supabase } from "@/utils/supabase";

const CustomerReview = () => {
    const { roboto, openSans } = useFonts();

    const [review, setReview] = useState({
        rating: 0,
        description: "",
        name: "",
        phoneNumber: ""
    });
    const [reviewSubmitted, setReviewSubmitted] = useState(false);


    const setPhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
        // Only allow numbers and ensure length is at most 10 digits
        const value = event.target.value.replace(/[^\d]/g, '').slice(0, 10);
        setReview({ ...review, phoneNumber: value })
    }

    const submitReview = async () => {
        const { error } = await supabase
            .from("reviews")
            .insert({ ...review, created_at: new Date() })
            .single()

        if (!error) {
            setReviewSubmitted(true);
        }
    }

    const resetReview = () => {
        setReview({
            rating: 0,
            description: "",
            name: "",
            phoneNumber: ""
        });
        setReviewSubmitted(false);
    }

    if (reviewSubmitted) {
        return (
            <section className={css.success}>
                <CheckCircleOutlineIcon />
                <label className={roboto.className}>Your feedback makes a world of difference! Thank you for trusting us with your health and for helping us be the best we can be.</label>
                <Button variant="text" onClick={resetReview}>Write Another Review For Us</Button>
            </section>
        )
    }

    return (
        <section>
            <PageHeading title="We’d Love to Hear Your Story!" />
            <div className={css.reviewContainer}>
                <label className={roboto.className}>If we&apos;ve made a positive impact on your health, we&apos;d love for you to share your experience with others!</label>
                <div className={css.formFields}>
                    <Typography component="legend" className={openSans.className}>Rate Us ✨</Typography>
                    <Rating
                        name="rating"
                        value={review.rating}
                        onChange={(event, newValue) => {
                            setReview({ ...review, rating: newValue ?? 0 });
                        }}
                    />
                </div>
                <div className={css.formFields}>
                    <Typography component="legend" className={openSans.className}>Your Story 💖</Typography>
                    <TextField
                        id="outlined-multiline-flexible"
                        label=""
                        value={review.description}
                        multiline
                        className={css.textField}
                        placeholder="Write your review"
                        onChange={(event) => setReview({ ...review, description: event.target.value })}
                    />
                </div>
                <hr className={css.horizontalLine} />
                <label className={roboto.className}>Share your name and number (optional) so we can send a heartfelt &quot;thank you&quot; for helping us grow!</label>
                <div className={css.formFields}>
                    <TextField
                        id="outlined-required"
                        label="Name"
                        placeholder="your name"
                        className={css.textField}
                        value={review.name}
                        onChange={(event) => setReview({ ...review, name: event.target.value })}
                    />
                </div>
                <div className={css.formFields}>
                    <TextField
                        id="outlined-required"
                        label="Phone Number"
                        placeholder="your phone number"
                        className={css.textField}
                        value={review.phoneNumber}
                        onChange={setPhoneNumber}
                        type="text" // Use 'text' to control input with JavaScript
                        inputProps={{
                            maxLength: 10, // Limit input length to 10 characters
                            pattern: "[0-9]*" // Allow only numeric characters (optional)
                        }}
                    />
                </div>
                <Button variant="contained" onClick={submitReview} className={css.btn} disabled={review.rating < 1 || review.description.length < 1}>Submit</Button>
            </div>
        </section>
    )
}

export default CustomerReview;