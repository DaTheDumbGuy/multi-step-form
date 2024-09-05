import styles from './fromHeader.module.scss';
interface FormHeaderProps {
    title:string;
    description:string;
}

export default function FormHeader({title, description}:FormHeaderProps){
    return(
        <header className={styles['b-formHeader']}>
                <h1>{title}</h1>
                <p>{description}</p>
        </header>
    )
}