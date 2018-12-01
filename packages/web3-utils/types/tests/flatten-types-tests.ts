/*
    This file is part of web3.js.
    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.
    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.d.ts
 * @author Josh Stevens <joshstevens19@hotmail.co.uk>
 * @date 2018
 */

import { BN, _flattenTypes } from "utils";

const bigNumber = new BN(3);

_flattenTypes(true, {}); // $ExpectType string[]
_flattenTypes(false, {}); // $ExpectType string[]

// $ExpectError
_flattenTypes(true, null);
// $ExpectError
_flattenTypes(true, undefined);
// $ExpectError
_flattenTypes(656, {});
// $ExpectError
_flattenTypes(bigNumber, {});
// $ExpectError
_flattenTypes(['string'], {});
// $ExpectError
_flattenTypes([4], {});
// $ExpectError
_flattenTypes('string', {});
// $ExpectError
_flattenTypes(null, {});
// $ExpectError
_flattenTypes(undefined, {});
