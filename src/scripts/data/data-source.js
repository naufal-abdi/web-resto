import API_ENDPOINT from '../globals/api-endpoint';

class DataSource {
  static async allResto() {
    const response = await fetch(API_ENDPOINT.ALL_DATA).catch((err) => err);
    if (response.ok) {
      const responseJson = await response.json();
      return responseJson.restaurants;
    }

    return undefined;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));

    if (response.ok) {
      const responseJson = await response.json();
      return responseJson.restaurant;
    }

    return undefined;
  }
}

export default DataSource;
