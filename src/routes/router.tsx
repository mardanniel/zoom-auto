import React from 'react';
import { 
  createMemoryRouter 
} from 'react-router-dom';

import { 
  upsertMeetingAction,
  deleteMeetingsAction,
  getMeetingsLoader,
  getMeetingLoader,
  removeMeetingAction,
} from '../services/meeting-service';

import Index from './Index';
import MeetingList from './MeetingList';
import UpsertMeeting from './UpsertMeeting';

export const router = createMemoryRouter([
  {
    path: '/',
    element: <Index />,
    children: [

      {
        index: true,
        loader: getMeetingsLoader,
        element: <MeetingList />
      },
      {
        path: 'meeting/upsert',
        action: upsertMeetingAction,
        element: <UpsertMeeting />
      },
      {
        path: 'meeting/upsert/:itemId',
        action: upsertMeetingAction,
        loader: getMeetingLoader,
        element: <UpsertMeeting />
      },
      {
        path: 'meeting/remove/:itemId',
        action: removeMeetingAction,
      },
      {
        path: 'meeting/clearAll',
        action: deleteMeetingsAction
      },
    ]
  },
]);