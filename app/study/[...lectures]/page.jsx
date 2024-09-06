//Catch All Segments
export default function Lectures({ params }) {
    return (
        <>
            <h1>Day of the Lecture</h1>
            <h2>{params.lectures[0]}</h2>
            <h1>Number of the Lecture</h1>
            <h2>{params.lectures[1]}</h2>
        </>
    )
}