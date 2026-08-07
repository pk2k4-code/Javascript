function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post Data fetched");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment data fetched.");
    }, 3000);
  });
}

async function getBlogData() {
  try {
    console.log("Fetching blog data");
    // const postData = await fetchPostData();
    // const commentData = await fetchCommentData();
    // INstead of using the above 2 lines we can use the below code of Promise.all() which will run both the promises in parallel and will wait for both of them to complete before moving to the next line of code, this is more efficient than running them one after the other as it will take less time to complete both the promises.
    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);

    console.log(postData);
    console.log(commentData);

    console.log("fetch complete");
  } catch (error) {
    console.error("Error fetching blog data", error);
  }
}
getBlogData();
