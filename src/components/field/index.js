const Field = ({title,subtitle}) => {



    return (
        <li className="field">
            <div>
                {title}
            </div>
            <div>
                {subtitle}
            </div>
        </li>
    )

}
export default Field;