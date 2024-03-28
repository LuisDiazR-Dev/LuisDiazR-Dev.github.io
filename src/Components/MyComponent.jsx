import { useState } from 'react'
import styled from 'styled-components'
// import { useState } from 'react'

const TextContainer = styled.div`
	max-width: 100%;
	overflow: hidden;
`

const Text = styled.p`
	margin: 0;
`

const Button = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	color: blue;
`

const ShortenedText = ({ text, maxLength }) => {
	const [isExpanded, setIsExpanded] = useState(false)

	const toggleText = () => {
		setIsExpanded(!isExpanded)
	}

	return (
		<TextContainer>
			<Text>{isExpanded ? text : `${text.slice(0, maxLength)}...`}</Text>
			<Button onClick={toggleText}>
				{isExpanded ? 'Leer menos' : 'Leer más'}
			</Button>
		</TextContainer>
	)
}

// Uso del componente
const MyComponent = () => {
	const longText =
		'Mejoré la organización en los tiempos de entrega de los pedidos mediante la implementación y configuración de un plugin. Esta adición permitió a los compradores seleccionar el día de entrega deseado, lo que posibilitó a la empresa priorizar las entregas de manera más efectiva. Como resultado, la empresa experimentó un aumento en la satisfacción del cliente y una mayor retención, además de una mejora en la reputación de la marca. Los clientes, a su vez, disfrutaron de la frescura y calidad de las verduras y frutas entregadas del día'
	const maxLength = 160

	return <ShortenedText text={longText} maxLength={maxLength} />
}

export default MyComponent
