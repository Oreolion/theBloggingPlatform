import { expect, describe, it } from "vitest";
import { fetchRandomUsers } from "../components/DashboardFeeds.vue";

describe("Random users test suite", async () => {
  const { data: response } = await fetchRandomUsers();
  console.log(response);

  it("should successfully fetch users", () => {
    expect(response.results).toBeTruthy();
  });

  it("should get 5 random users", () => {
    expect(response.results.length).toEqual(5);
  });

  it("should contain email", () => {
    expect(Object.keys(response.results[0])).toContain("email");
  });
});