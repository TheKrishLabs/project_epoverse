import { privateApi, publicApi } from "@/lib/axios";


// ✅ Get all polls (PUBLIC)
export const getPolls = async () => {
  const res = await publicApi.get("/polls");
  return res.data; // returns full object
};
// ✅ Create Vote
export const createVote = async (
  pollId: string,
  optionId: string
) => {
  const res = await privateApi.post("/poll-votes", {
    poll: pollId,
    optionId,
  });

  return res.data;
};

// ✅ Change Vote
export const changeVote = async (
  pollId: string,
  optionId: string
) => {
  const res = await privateApi.post(
    "/poll-votes/change-vote",
    {
      poll: pollId,
      optionId,
    }
  );

  return res.data;
};

// ✅ Delete Vote
export const deleteVote = async (pollId: string) => {
  const res = await publicApi.delete(
    `/poll-votes/${pollId}`
  );

  return res.data;
};