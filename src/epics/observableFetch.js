import { Observable } from 'rxjs';

export default (url, init = {}) => (
  Observable.fromPromise(fetch(url, init).then(response => response.json()))
);
