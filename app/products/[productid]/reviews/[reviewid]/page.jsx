//Nested Dynamic Routes
import { notFound } from "next/navigation"
export default function Review({ params }) {
    if (parseInt(params.reviewid) > 1000) {
        notFound();
    }
    return (
        <>
            <h1>Review {params.reviewid} for Product {params.productid} </h1>
        </>
    )
}