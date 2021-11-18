import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionPreview from '../collection-preview/collection-preview.component'

// import { selectCollections } from '../../redux/shop/shop.selectors'

/**
 The selectCollections function is not returning an Array again because 
the datas in SHOP_DATA has being converted into an Object instead if Array it was initially. 
This concept is called Data Normalization. It improves performance while seaching for data in database.
If the data is to remain an Array and we have thousands of data in our database, looping through it Array Item will slow down the App performance.
*/

/**
 A new selector, selectCollectionsForPreview is created to convert the Object keys from the 
 collections Object into Array using the Object.key() method
 */

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

import './collections-overview.styles.scss'

const CollectionsOverview = ({ collections }) => (
	<div className='collections-overview'>
		{collections.map(({ id, ...otherCollectionProps }) => (
			<CollectionPreview key={id} {...otherCollectionProps} />
		))}
	</div>
)

const mapStateToProps = createStructuredSelector({
	// collections: selectCollections,
	collections: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionsOverview)
