"use strict";
import assert from 'assert';
import {shallow, mount, render} from 'enzyme';
import React from 'react';
import HelloView from '../../js/main/HelloView.jsx';

describe('Test for Hello View', function() {
  describe('render()', function() {
    it('should have one h1 element', function() {
      const wrapper = shallow(<HelloView />);
      expect(wrapper.find('h1').length).toEqual(1);
    });
  });
});
