import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Gallery from '../js/components/gallery';

describe ('Correctly Working Gallery Component', function() {
	let result;
	let images;
	beforeEach(() => {
		images = [{
			url: "http://www.newarknj.com",
			 description: "Come to Newark for the Better Weather"
		},
		{
			url: "http://www.atlantaga.com",
			 description: "Come to Atlanta for the Better Weather"
		}
		];
		const renderer = TestUtils.createRenderer();
		renderer.render(<Gallery images={images} />);
		result = renderer.getRenderOutput();
	});

	it('Renders the correct class name', function() {
		result.props.className.should.equal('gallery');
	});

	it('Renders the correct number of images', function() {
		result.props.children.should.have.lengthOf(images.length);
	});


	it('Each image has the correct props', function() {
		result.props.children[0].props.description.should.equal(images[0].description);
		result.props.children[0].props.url.should.equal(images[0].url);

	});

});

