import {useState} from "react"
import {Card, Button, Table} from "react-bootstrap"
import "./../index.css"

export default function FeaturedItem(props) {
    const [buttonText, flipButtonText] = useState("Show Nutrition Facts")
    const [hiddenStatus, changeHiddenStatus] = useState(false)

    function nutritionButtonFunctionality() {
        if(buttonText === "Show Nutrition Facts"){
            flipButtonText("Hide Nutriton Facts")
            changeHiddenStatus(true)
        } else {
            flipButtonText("Show Nutrition Facts")
            changeHiddenStatus(false)
        }
    }

    let listOfNutrition = ["calories","fat","carbohydrates","protein"]
    return <Card>
        <img src = {props.img} alt={props.name}></img>
        <h3>{props.name}</h3>
        <h4>${props.price} per unit</h4>
        <p>{props.description}</p>
        <Button onClick={nutritionButtonFunctionality} class="nutritionButton">{buttonText}</Button>
        <Table>
            <tbody>
                <tr>
                    {hiddenStatus && <th>Calories</th>}
                    {hiddenStatus && <th>Fat</th>}
                    {hiddenStatus && <th>Carbohydrates</th>}
                    {hiddenStatus && <th>Protein</th>}
                </tr>
                <tr>
                    {hiddenStatus && listOfNutrition.map(item => (
                        <td key={item}>
                            {item in props.nutrition ? props.nutrition[item]: "0g"}
                        </td>
                    ))}
                </tr>
            </tbody>
        </Table>
    </Card>
}