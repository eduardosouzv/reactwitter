import {
  ApolloClient,
  InMemoryCache,
  gql,
  NormalizedCacheObject,
} from '@apollo/client';

class HttpClient {
  baseURL: string;

  client: ApolloClient<NormalizedCacheObject>;

  constructor(baseURL: string) {
    this.baseURL = baseURL;

    this.client = new ApolloClient({
      uri: this.baseURL,
      cache: new InMemoryCache(),
    });
  }

  async graphql(query: string) {
    try {
      const response = await this.client.query({
        query: gql`${query}`,
      });

      const { data } = response;
      return data;
    } catch (error) {
      return console.log(`error: ${error}`);
    }
  }
}

export default new HttpClient('http://localhost:4000/');
