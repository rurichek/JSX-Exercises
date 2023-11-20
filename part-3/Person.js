const Person = (props) => {
    const message = props.age >= 18 ? "please go vote!" : "you have to be age 18";
    const displayName = props.name.length > 8 ? props.name.substring(0, 6) : props.name;

    return (

        <div>
            <p>Learn some information about this person</p>
            <ul>
                <li>{displayName}</li>
                <li>{props.age}</li>
                <li>{message}</li>
                <li>Hobbies: {props.hobbies.map(t => <ol>{t}</ol>)}</li>
                
            </ul>
        </div>
    )
}

