function PriceInput({ initalprice, onchange}) {

    const handlerChange = (event) => {
        onchange(event.target.value);
    };
};

export default PriceInput;