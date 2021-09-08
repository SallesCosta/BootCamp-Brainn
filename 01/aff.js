import React from 'react'

const Form = ({ setCars }) => {
    const [isToggle, setToggle] = React.useState(false)
    const [inputPlate, setInputPlate] = React.useState('')
    const [inputYear, setInputYear] = React.useState('')
    const [inputColor, setInputColor] = React.useState('#ffffff')
    const [alterationBar, setAlterationBar] = React.useState({
        error: false,
        text: 'Houve uma alteração no formulário'
    })

    const handleInputYear = (event) => {
        const format = event.target.value.replace(/\D/g, '')
        setInputYear(format)
    }

    const handleInputPlate = (event) => {
        const format = event.target.value
            .replace(/([a-zA-Z]{3})/, '$1')
            .replace(/([0-9]{4})/, '$1')
            .replace(/(^[a-zA-Z]{3})([0-9]{4})/, '$1-$2')
        setInputPlate(format.toUpperCase())
    }

    const handleFormReset = () => {
        setInputYear('')
        setInputPlate('')
        setToggle(false)
        setAlterationBar({
            error: false,
            text: 'Houve uma alteração no formulário'
        })
    }

    const handleInputsByForm = (event) => {
        const formElement = event.target.closest('form')
        const { image, brandModel, plate, year } = formElement.elements
        if (
            image.value.length > 0 ||
            brandModel.value.length > 0 ||
            plate.value.length > 0 ||
            year.value.length > 0
        ) {
            setToggle(true)
        } else {
            setToggle(false)
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()

        const { image, brandModel, plate, year, color } = event.target.elements
        setAlterationBar({
            error: false,
            text: 'Houve uma alteração no formulário'
        })

        fetch('http://localhost:3333/cars', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                image: image.value,
                brandModel: brandModel.value,
                year: Number(year.value),
                plate: plate.value,
                color: color.value
            })
        })
            .then(response => response.json())
            .then((response) => {
                if (response.error) {
                    return setAlterationBar({
                        error: true,
                        text: `${response.message}`
                    })
                }

                setCars((response) => {
                    return [
                        ...response, {
                            image: image.value,
                            brandModel: brandModel.value,
                            year: Number(year.value),
                            plate: plate.value,
                            color: color.value
                        }
                    ]
                })

                handleFormReset()
                event.target.reset()
            })
    }

    return (
        <div className="form-wrapper">
            <h2 className="form-title">Cadastre um novo carro</h2>
            <form
                className="form"
                onChange={handleInputsByForm}
                onSubmit={handleFormSubmit}
            >
                <div className="form-group">
                    <label className="label" htmlFor="image">
                        <span className="text">Url da imagem</span>
                        <input
                            type="url"
                            className="inputbox"
                            name="image"
                            id="image"
                            required
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="brandModel">
                        <span className="text">Modelo do carro</span>
                        <input
                            type="text"
                            className="inputbox"
                            name="brandModel"
                            id="brandModel"
                            required
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="plate">
                        <span className="text">Placa do carro</span>
                        <input
                            type="text"
                            className="inputbox number"
                            name="plate"
                            id="plate"
                            value={inputPlate}
                            minLength={8}
                            maxLength={8}
                            required
                            onChange={handleInputPlate}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="year">
                        <span className="text">Ano de fabricação</span>
                        <input
                            type="text"
                            className="inputbox number"
                            name="year"
                            id="year"
                            value={inputYear}
                            minLength={2}
                            maxLength={4}
                            required
                            onChange={handleInputYear}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="color">
                        <span className="text">Cor do carro</span>
                        <div className="form-subgroup">
                            <input
                                type="color"
                                className="inputcolor"
                                id="color"
                                name="color"
                                value={inputColor}
                                onChange={(event) => setInputColor(event.target.value)}
                            />
                            <div className="inputbox number center-start">{inputColor}</div>
                        </div>
                    </label>
                </div>
                <div className={`form-fixed${isToggle ? ' visible' : ''}${alterationBar.error ? ' error' : ''}`}>
                    <div className="form-fixed__text number">
                        {alterationBar.text}
                    </div>
                    <div className="form-buttons">
                        <button className="form-button" type="reset" onClick={handleFormReset}>
                            Redefinir
                        </button>
                        <button className="form-button form-button__submit" type="submit">
                            Salvar veículo
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form