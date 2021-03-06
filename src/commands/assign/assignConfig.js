import moment from 'moment';

export default {
  tick: 0,
  update: true,
  updateInterval: 30, // 30 seconds.
  refresh: false,
  refreshInterval: 300, // 5 minutes.
  updatePositions: false,
  updatePositionsInterval: 300, // 5 minutes.
  updateFeedbacks: true,
  updateFeedbacksInterval: 300, // 5 minutes
  flags: {
    // Notifications
    assignment: true,
    push: false,
    feedbacks: false,
    ui: true,
    // UI
    queue: true,
    assigned: true,
    infotext: true,
    silent: false,
    verbose: false,
    helptext: false,
  },

  requestIds: [],
  submission_request: {},
  startTime: moment(),
  error: '',
  key: '',
  assignedTotal: 0,
  ids: [],
  assigned: [],
  positions: [],
  unreadFeedbacks: [],
};
