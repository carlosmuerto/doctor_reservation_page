import deepFreeze from 'deep-freeze';

const loadingStatus = deepFreeze({
  idle: 'IDLE',
  pending: 'PENDING',
  succeeded: 'SUCCEEDED',
  failed: 'FAILED',
});

export default loadingStatus;
