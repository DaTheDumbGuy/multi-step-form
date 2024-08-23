
interface FormHeaderProps {
    title:string;
    description:string;
}

export default function FormHeader({title, description}:FormHeaderProps){
    return(
        <header>
                <h1>{title}</h1>
                <p>{description}</p>
        </header>
    )
}