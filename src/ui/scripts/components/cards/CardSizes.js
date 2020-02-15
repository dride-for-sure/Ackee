import { createElement as h } from 'react'
import PropTypes from 'prop-types'

import Headline from '../Headline'
import Text from '../Text'
import PresentationCounterList from '../presentations/PresentationCounterList'
import PresentationEmptyState, { ICON_LOADING, ICON_WARNING } from '../presentations/PresentationEmptyState'

const CardSizes = (props) => {

	const presentation = (() => {

		if (props.loading === true) return h(PresentationEmptyState, {
			icon: ICON_LOADING
		}, 'Loading sizes')

		const hasItems = props.items.length > 0

		if (hasItems === true) return h(PresentationCounterList, {
			items: props.items
		})

		return h(PresentationEmptyState, {
			icon: ICON_WARNING
		}, 'No sizes')

	})()

	return (
		h('div', {
			className: 'card'
		},
			h('div', { className: 'card__inner' },
				h(Headline, {
					type: 'h2',
					small: true,
					className: 'color-white'
				}, props.headline),
				h(Text, {
					spacing: false
				}, 'Last 7 days'),
				presentation
			)
		)
	)

}

CardSizes.propTypes = {
	headline: PropTypes.string.isRequired,
	loading: PropTypes.bool.isRequired,
	items: PropTypes.array.isRequired
}

export default CardSizes