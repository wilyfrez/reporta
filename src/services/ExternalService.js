import axios from 'axios';

import AuthHeader from './AuthHeader';

import { API_URL, PATHS } from '../utils/data';

class ExternalService {
  async getAwsUploadSignedUrl(fileName, folder) {
    try {
      const response = await axios.get(
        `${API_URL}/services/s3secureUrl/${fileName}/${folder}`,
        {
          headers: AuthHeader(),
        }
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
}

export default new ExternalService();
