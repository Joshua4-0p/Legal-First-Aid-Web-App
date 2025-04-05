import React, { useRef, useState, useEffect } from "react";
import {
  CircleUserRound,
  Image,
  X,
  ThumbsUp,
  Pencil,
  MessageCircle,
  FileQuestion,
} from "lucide-react";

function HomePage() {
  const fileInputRef = useRef(null);
  // State for modal open/close
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State to hold the fetched situations from API
  const [apiSituations, setApiSituations] = useState([]);
  // State to manage comment section open/close for each situation
  const [openComment, setOpenComment] = useState([]);
  // Add state for image preview
  const [preview, setPreview] = useState("");
  // State for likes
  const [likes, setLikes] = useState({});
  // Add these states at the top of your component
  const [commentText, setCommentText] = useState("");
  const [editingSuggestionId, setEditingSuggestionId] = useState(null);
  const [editCommentText, setEditCommentText] = useState("");
  const [editingPost, setEditingPost] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: "",
    description: "",
    image: null,
  });

  // Get user data anywhere in your app:
  const user = JSON.parse(localStorage.getItem("user"));

  // Function to fetch situations from API
  const fetchSituations = async () => {
    try {
      const url =
        "https://rrn24.techchantier.com/Legal_First_Aid/public/api/situations";
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const result = await response.json();
      console.log(result);
      if (result.success) {
        // If situation.user is missing, set default value
        const formattedData = result.data.map((post) => ({
          ...post,
          user: post.user || { name: "Anonymous User" },
        }));

        const sortedData = formattedData.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );

        setApiSituations(sortedData);
        setOpenComment(Array(sortedData.length).fill(false));
      }
    } catch (error) {
      console.error("Error fetching situations:", error);
    }
  };

  useEffect(() => {
    fetchSituations();
  }, []);

  // GET Suggestions for a Situation
  const fetchSuggestions = async (situationId) => {
    // console.log(`Fetching suggestions for situation ID: ${situationId}`);
    
    try {
      const response = await fetch(
        `https://rrn24.techchantier.com/Legal_First_Aid/public/api/situations/${situationId}/suggestions`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

    const data= await response.json();
      console.log("commentFetch:", situationId);
      console.log("comment res:", data);
      
      return await data;
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  // Toggle comment section for a given situation index
  const handleCommentClick = async (situationId, index) => {
    console.log(`situationId: ${situationId}`); // Verify that situationId is defined

    const newOpen = [...openComment];

    newOpen[index] = !newOpen[index];
    setOpenComment(newOpen);

    // fetchSuggestions(situationId); // Refresh post data

    if (newOpen[index] && situationId !== undefined) {
      const suggestionsResult =await fetchSuggestions(situationId);
      console.log("suggestionsList", suggestionsResult.data);
      
      if (suggestionsResult && suggestionsResult.success) {
        
        setApiSituations((prevSituations) =>
          prevSituations.map((post) =>
            post.id === situationId
              ? { ...post, suggestions: suggestionsResult.data }
              : post
          )
        );
      }
    }
  };

  // Replace handleLike with:
  // Replace handleLike with:
  const handleLike = async (situationId) => {
    try {
      const response = await fetch(
        `https://rrn24.techchantier.com/Legal_First_Aid/public/api/situations/${situationId}/like`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        fetchSituations(); // Refresh post data
      }
    } catch (error) {
      console.error("Like failed:", error);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleDeletePost = async (situationId) => {
    try {
      const response = await fetch(
        `https://rrn24.techchantier.com/Legal_First_Aid/public/api/situations/${situationId}`, // Add extra /api
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json", // Add required headers
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setApiSituations((prev) =>
          prev.filter((post) => post.id !== situationId)
        );
      }
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  // UPDATE Suggestion
  const handleEditSuggestion = async (suggestionId) => {
    try {
      const response = await fetch(
        `https://rrn24.techchantier.com/Legal_First_Aid/public/api/suggestions/${suggestionId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            answer: editCommentText,
          }),
        }
      );

      if (response.ok) {
        fetchSituations();
        setEditingSuggestionId(null);
      }
    } catch (error) {
      console.error("Error updating suggestion:", error);
    }
  };

  // DELETE Suggestion
  const handleDeleteSuggestion = async (suggestionId) => {
    try {
      const response = await fetch(
        `https://rrn24.techchantier.com/Legal_First_Aid/public/api/suggestions/${suggestionId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        fetchSituations();
      }
    } catch (error) {
      console.error("Error deleting suggestion:", error);
    }
  };

  // Handle comment (suggestion) submission for a situation
  const handleCommentSubmit = async (situationId, commentText) => {
    // Ensure token exists

    
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in to submit a comment.");
      return;
    }


    // Ensure comment text is not empty
    if (!commentText.trim()) return;

    const commentData = {
      answer: commentText,
      legal_system: "common_law",
    };
    console.log("commentData",commentData);
    
    try {
      const response = await fetch(
        `https://rrn24.techchantier.com/Legal_First_Aid/public/api/situations/${situationId}/suggestions`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(commentData),
        }
      );

      // Check if the response is being redirected (e.g., to login)
      if (response.status === 302) {
        const redirectUrl = response.headers.get("Location");
        console.error(
          "Unexpected redirect detected. Redirecting to:",
          redirectUrl
        );
        throw new Error(
          `Unexpected redirection occurred. Redirecting to: ${redirectUrl}`
        );
      }

      if (!response.ok) {
        console.error("Error submitting comment. Status:", response.status);
        throw new Error("Error submitting comment.");
      }

      // On success, clear the comment field and update suggestions for the situation
      setCommentText("");
      const suggestionsResult = await fetchSuggestions(situationId);
      if (suggestionsResult && suggestionsResult.success) {
        setApiSituations((prevSituations) =>
          prevSituations.map((post) =>
            post.id === situationId
              ? { ...post, suggestions: suggestionsResult.data }
              : post
          )
        );
      }
    } catch (error) {
      console.error("Comment failed:", error);
      alert("Failed to submit comment. Please try again.");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      console.log("File Uploaded Successfully");
    }
  };

  // Edit Post Handler
  const handleEditPost = async (e) => {
    e.preventDefault();
    try {
      const url = `https://rrn24.techchantier.com/Legal_First_Aid/public/api/situations/${situations.id}`;
      const formData = new FormData();

      formData.append("title", editFormData.title);
      formData.append("description", editFormData.description);
      if (editFormData.image) {
        formData.append("image", editFormData.image);
      }

      const token = localStorage.getItem("token");
      const headers = {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      };

      const response = await fetch(url, {
        method: "PUT",
        body: formData,
        headers,
      });

      if (response.ok) {
        fetchSituations();
        setIsModalOpen(false);
        setEditingPost(null); // Add this
        setEditFormData({ title: "", description: "", image: null });
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleInputClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // POST a new situation using form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!localStorage.getItem("token")) {
      alert("Please login to post");
      window.location.href = "/login";
      return;
    }

    try {
      const url =
        "https://rrn24.techchantier.com/Legal_First_Aid/public/api/situations";
      const formData = new FormData(e.target);

      // Headers
      const token = localStorage.getItem("token");
      const headers = {
        Accept: "application/json", // Required by the API example
      };
      if (token) headers["Authorization"] = `Bearer ${token}`;

      const response = await fetch(url, {
        method: "POST",
        body: formData,
        headers,
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.message || "Failed to create post.");
        return;
      }

      console.log("Post created:", result);
      fetchSituations();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Request failed:", error);
      alert("Network error. Check console.");
    }
  };

  return (
    <div className="relative mt-4 border-b border-neutral-900/70 min-h-[800px]">
      <div className="flex justify-center items-center">
        <div className="border rounded-lg lg:w-[65%] sm:w-[80%] h-auto shadow-xl bg-white">
          <div className="flex p-3 items-start">
            <div className="text-neutral-600 mr-2">
              <CircleUserRound size={45} />
            </div>
            <input
              type="text"
              name="post"
              placeholder="What do you want to ask or share?"
              className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-1 focus:ring-black"
              onClick={handleInputClick}
              readOnly
            />
          </div>
          <div className="flex justify-between items-center mx-15 mb-4">
            <div className="flex" onClick={handleInputClick}>
              <FileQuestion size={30} />
              <span className="ml-2 text-[17px] tracking-wider font-semibold">
                Ask
              </span>
            </div>
            <button
              className="rounded-full w-25 h-auto items-end bg-black p-2 text-white"
              onClick={handleInputClick}
            >
              Post
            </button>
          </div>
        </div>
      </div>
      {/* Render the fetched situations */}
      {apiSituations.map((situation, index) => (
        <div key={situation.id}>
          <div className="flex flex-col mx-auto lg:w-[65%] my-2 sm:w-[80%] justify-start rounded-lg border shadow h-auto bg-white">
            {/* Replace the entire flex justify-between div with this */}
            <div className="flex justify-between items-center p-4">
              <div className="flex items-center">
                <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    {(situation.user?.name?.[0] || "A").toUpperCase()}
                  </span>
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold">
                    {situation.user?.name || "Anonymous User"}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {new Date(situation.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleDeletePost(situation.id)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <div className="text-md mb-3">
              <p className="mx-7 font-semibold text-2xl">{situation.title}</p>
              <p className="ml-7 text-xl mb-3">{situation.description}</p>
              {/* In the image display section */}
              {situation.image && (
                <img
                  src={situation.image}
                  className="mx-auto mb-4 rounded-lg max-w-full"
                  alt="Situation visual"
                />
              )}
            </div>
            <div className="flex justify-between mb-2">
              <div
                className="flex px-3 py-2"
                onClick={() => handleLike(situation.id)}
              >
                <ThumbsUp size={25} />
                <span className="ml-2 my-auto text-[17px]">
                  Like {situation.likes_count || 0}
                </span>
              </div>
              <div className="flex px-3 py-2">
                {/* Only show edit button if current user is post owner */}
                {situation.user?.id ===
                  JSON.parse(localStorage.getItem("user"))?.id && (
                  <button
                    onClick={() => {
                      setEditingPost(situation);
                      setEditFormData({
                        title: situation.title,
                        description: situation.description,
                        image: null,
                      });
                    }}
                    className="flex items-center hover:text-blue-600"
                  >
                    <Pencil size={25} />
                    <span className="ml-2 text-[17px]">Edit Post</span>
                  </button>
                )}
              </div>
              <button
                className="flex px-3 py-2"
                onClick={() => handleCommentClick(situation.id, index)}
              >
                <MessageCircle size={25} />
                <span className="ml-2 my-auto text-[17px]">Comment</span>
              </button>
            </div>
          </div>
          {openComment[index] && (
            <div className="flex flex-col mx-auto">
              <div className="lg:w-[65%] sm:w-[80%] mx-auto bg-neutral-200 border border-neutral-300">
                <div className="flex p-3 items-start gap-2 flex-col sm:flex-row">
                  <div className="text-neutral-600 mr-2">
                    <CircleUserRound size={45} />
                  </div>
                  <div className="w-full bg-white rounded-full">
                    <input
                      type="text"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="Write Your Comment Here!"
                      className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>
                  <button
                    onClick={() =>
                      handleCommentSubmit(situation.id, commentText)
                    }
                    className={`rounded-full w-full sm:w-auto font-semibold ml-2 h-auto p-2 ${
                      JSON.parse(localStorage.getItem("user"))?.role ===
                      "lawyer"
                        ? "bg-black text-white hover:bg-gray-800"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
                    disabled={
                      JSON.parse(localStorage.getItem("user"))?.role !==
                      "lawyer"
                    }
                  >
                    Add Comment
                  </button>
                </div>
              </div>

              {/* Enhanced Comments Display */}
              <div className="border shadow-xl border-neutral-300 lg:w-[65%] sm:w-[80%] bg-white mx-auto p-3">
                <h1 className="border-b pb-4 pt-3 px-3">
                  Legal Suggestions {situation.id}
                </h1>
                {situation.suggestions?.map((suggestion) => (
                  <div key={suggestion.id} className="group relative">
                    <div className="flex items-center mb-3 justify-between">
                      <div className="flex items-center">
                        <div className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold">
                            {suggestion.lawyer?.name[0] || "L"}
                          </span>
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium">
                            {suggestion.lawyer?.name || "Legal Expert"}
                          </h4>
                          {editingSuggestionId === suggestion.id ? (
                            <input
                              type="text"
                              value={editCommentText}
                              onChange={(e) =>
                                setEditCommentText(e.target.value)
                              }
                              className="border rounded px-2 py-1"
                            />
                          ) : (
                            <p className="text-gray-600 text-sm">
                              {suggestion.answer}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Edit/Delete Controls */}
                      {JSON.parse(localStorage.getItem("user"))?.id ===
                        suggestion.lawyer?.id && (
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          {editingSuggestionId === suggestion.id ? (
                            <button
                              onClick={() =>
                                handleEditSuggestion(suggestion.id)
                              }
                              className="text-green-600 hover:text-green-800"
                            >
                              Save
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                setEditingSuggestionId(suggestion.id);
                                setEditCommentText(suggestion.answer);
                              }}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              <Pencil size={16} />
                            </button>
                          )}
                          <button
                            onClick={() =>
                              handleDeleteSuggestion(suggestion.id)
                            }
                            className="text-red-600 hover:text-red-800"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">
                      {new Date(suggestion.created_at).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
      {/* Add this modal component near your existing modal */}
      {editingPost && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur">
          <div className="bg-white p-6 rounded-lg shadow-lg lg:w-[50%] md:w-[75%] h-[70%] relative">
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold mb-4">Edit Post</h2>
              <button onClick={() => setEditingPost(null)}>
                <X size={25} />
              </button>
            </div>
            {editFormData.image && (
              <img
                src={URL.createObjectURL(editFormData.image)}
                className="mb-4 max-h-40 object-cover rounded"
                alt="Preview"
              />
            )}
            <form onSubmit={handleEditPost}>
              <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={editFormData.title}
                  onChange={(e) =>
                    setEditFormData({ ...editFormData, title: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={editFormData.description}
                  onChange={(e) =>
                    setEditFormData({
                      ...editFormData,
                      description: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border h-[250px] rounded focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex" onClick={handleImageClick}>
                  <Image size={30} />
                  <span className="ml-2 text-[17px] tracking-wider font-semibold">
                    {editFormData.image ? "Image Selected" : "Change Image"}
                  </span>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={(e) =>
                    setEditFormData({
                      ...editFormData,
                      image: e.target.files[0],
                    })
                  }
                  className="hidden"
                />
                <button
                  type="submit"
                  className="rounded-full bg-black text-white py-2 px-4"
                >
                  Update Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur">
          <div className="bg-white p-6 rounded-lg shadow-lg lg:w-[50%] sm:w-[75%] md:w-[75%] h-[75%] relative">
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold mb-4">Create Post</h2>
              <button onClick={handleCloseModal}>
                <X size={25} />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter the title of your post"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <div className="flex justify-center items-end space-x-2.5">
                  <textarea
                    name="description"
                    placeholder="Enter the description of your situation"
                    className="w-full px-3 py-2 border h-[250px] rounded focus:outline-none focus:ring-2 focus:ring-black"
                  ></textarea>
                  {preview && (
                    <img
                      src={preview}
                      className="mb-4 max-h-40 object-cover rounded"
                      alt="Preview"
                    />
                  )}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex" onClick={handleImageClick}>
                  <Image size={30} />
                  <span className="ml-2 text-[17px] tracking-wider font-semibold mb-5">
                    Upload Image
                  </span>
                </div>
                <input
                  type="file"
                  name="image" // Add this
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <button
                  type="submit"
                  className="rounded-full bg-black text-white py-2 px-4 mb-5"
                >
                  Post
                </button>
              </div>
            </form>
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={handleCloseModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
      {/* {console.log(user)} */}
    </div>
  );
}

export default HomePage;
