// import ListingIndexContainer from '../../../app/javascript/react/containers/ListingIndexContainer.js'
// import ListingTile from '../../../app/javascript/react/components/ListingTile.js'
// import fetchMock from 'fetch-mock'
// import { mount } from 'enzyme'
// import jasmineEnzyme from 'jasmine-enzyme'
//
//
// describe('ListingIndexContainer', () => {
//   let wrapper
//
//   beforeEach(() => {
//     jasmineEnzyme()
//
//     fetchMock.get('/api/v1/podcasts.json', {
//       status: 200,
//       body: [
//         {
//           amenities:{
//             building_style: "duplex",
//             cooling: "central air",
//             heating: "gas",
//             hud: false,
//             id: 1,
//             listing_id: 1,
//             parking_spaces: 0,
//             pets: false,
//             school_district: "Center",
//             smoking: false,
//             zoning: "residential"
//           },
//           city: "Oneonta",
//           features:{
//             bathrooms: "1",
//             bedrooms: "2",
//             date_available: "2019-02-30",
//             id: 1,
//             lease_length: "12",
//             listing_id: 1,
//             rent: "650",
//             sq_ft: 1000,
//           },
//           id: 1,
//           latitude: "42.458542",
//           longitude: "-75.064056",
//           pictures: "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-05+at+8.12.46+PM.png",
//           state: "NY",
//           street: "14 Washington St",
//           unit: "",
//           zip: "13820"
//         }
//       ]
//     })
//
//     wrapper = mount(
//       <ListingIndexContainer />
//     );
//   });
//
//   afterEach(fetchMock.restore)
//
//   it('should have initial state {listings_all: []}', () => {
//     expect(wrapper).toHaveState('listings_all', [])
//   })
//
//   it('renders <ListingTile>s after API call', (done) => {
//     setTimeout(() => {
//       expect(wrapper.find('ListingTile')).toBePresent();
//       done()
//     }, 0)
//   })
//
// });
