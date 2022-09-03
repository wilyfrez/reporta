// /* eslint-disable comma-dangle */
// /* eslint-disable class-methods-use-this */
// import axios from 'axios';
// import { API_URL, ORGANIZATION_PATH, TEMPLATE_PATH } from '../utils/constants';
// import AuthHeader from './AuthHeader';

// class TemplatesService {
//   async getOrganizationTemplates(organizationId) {
//     const response = await axios.get(
//       `${API_URL}/${ORGANIZATION_PATH}/${organizationId}/${TEMPLATE_PATH}`,
//       {
//         headers: AuthHeader(),
//       }
//     );
//     return response.data.templates;
//   }

//   async addTemplate(organizationId, data) {
//     const response = await axios.post(
//       `${API_URL}/${ORGANIZATION_PATH}/${organizationId}/${TEMPLATE_PATH}`,
//       data,
//       {
//         headers: AuthHeader(),
//       }
//     );
//     return response.data;
//   }
// }

// export default new TemplatesService();
