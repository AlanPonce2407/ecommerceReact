const ItemListContainer = (props) => {
    return (
        <div className="flex justify-center items-center my-10">
            <h1 className="text-6xl">{ props.greeting }</h1>
        </div>
    )
}

export default ItemListContainer