import axios from 'axios';
import { baseUrl } from '../helpers/Constants';

export default class ToDoListService {
  async getAllToDoItems() {
    try {
      const response = await axios.get(baseUrl);
      // sort by iscompleted then by description?
      return response.data.sort((a,b) => (a.isCompleted - b.isCompleted || a.description.toLowerCase() < b.description.toLowerCase() ? -1 : 1));
    } catch (error) {
      throw error;
    }
  }

  async postToDoItem(item) {
    try {
      const response = await axios.post(baseUrl, item);
      console.log(response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
