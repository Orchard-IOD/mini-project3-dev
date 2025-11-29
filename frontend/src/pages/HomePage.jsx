import RecipeForm from "../components/RecipeForm"
import { BackButton } from "../components/BackButton";


export function HomePage() {
    return (
        <>
        <BackButton />
            <h1>Recipe form</h1>
        <RecipeForm />
        </>
    )
}