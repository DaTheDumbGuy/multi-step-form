interface AddOnOptionProps {
    addOn: {
        name: string;
        value: string;
        title: string;
        description: string;
        price: string;
    };
}

export default function AddOnOption({addOn}: AddOnOptionProps){
    return(

        <div>
            <input
                type="radio"
                id={addOn.value}
                name={addOn.name}
                value={addOn.value}
            />
            <label htmlFor={addOn.value}>
                <div>
                    <h2>{addOn.title}</h2>
                    <p>{addOn.description}</p>
                </div>
                <span>{addOn.price}</span>
            </label>
        </div>
    )
}