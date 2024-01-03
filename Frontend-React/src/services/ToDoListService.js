import axios from 'axios';
import { baseUrl } from '../helpers/Constants';

export default class TodoListService {
  async getAllTodoItems() {
    try {
      const response = await axios.get(baseUrl);
      return response.data.sort((a,b) => (a.description.toLowerCase() < b.description.toLowerCase() ? -1 : 1));
    } catch (error) {
      throw error;
    }
  }

  async postTodoItem(item) {
    try {
      const response = await axios.post(baseUrl, item);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async markTodoItemCompleted(item) {
    try {
      await axios.put(baseUrl + "/" + item.id, item);
    } catch (error) {
      throw error;
    }
  }
}
