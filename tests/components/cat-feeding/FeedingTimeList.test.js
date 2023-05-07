import React from "react";
import renderer from "react-test-renderer";

import FeedingTimeList from "../../../src/components/cat-feeding/FeedingTimeList";
jest.useFakeTimers();

const props = {
  weekDay: 1,
  catId: "/api/cat/123",
  catName: "TEST",
  feedingTimesData: {
    data: {
      feedingTimes: {
        edges: [
          {
            node: {
              id: "/api/feeding_times/18",
              cat: {
                id: "/api/cats/246",
                name: "Chris",
              },
              food: {
                name: "Diät Trockenfutter",
              },
              time: "1970-01-01T20:45:06+01:00",
              weekDay: 7,
            },
          },
          {
            node: {
              id: "/api/feeding_times/28",
              cat: {
                id: "/api/cats/246",
                name: "Chris",
              },
              food: {
                name: "Trockenfutter",
              },
              time: "1970-01-01T20:00:00+01:00",
              weekDay: 1,
            },
          },
        ],
      },
    },
  },
};
const feedingTimeLongClick = (feedingTimeId) => {
  console.log(feedingTimeId);
};
test("renders FeedingTime List correctly", () => {
  const tree = renderer
    .create(
      <FeedingTimeList
        feedingTimeLongClick={feedingTimeLongClick}
        weekDay={props.weekDay}
        feedingTimesData={props.feedingTimesData.data.feedingTimes.edges}
        catName={props.catName}
        catId={props.catId}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
