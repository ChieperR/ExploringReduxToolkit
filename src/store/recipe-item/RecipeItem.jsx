import styles from './ReciperItem.module.scss'
import {useSelector} from "react-redux";

function RecipeItem({recipe}) {
    const {favorites} = useSelector(state => state)
    return (
        <div className={styles.item}>
            <h2>{recipe.name}</h2>
            <button>Add to favorites</button>
        </div>
    )
}

export default RecipeItem
