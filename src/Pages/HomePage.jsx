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
      {/* Create Post Input */}
      <div className="flex justify-center items-center px-2">
        <div className="border rounded-lg w-full max-w-[95%] md:max-w-[85%] lg:max-w-[65%] h-auto shadow-xl bg-white">
          <div className="flex p-3 items-start gap-2">
            <div className="text-neutral-600">
              <CircleUserRound className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <input
              type="text"
              name="post"
              placeholder="What do you want to ask or share?"
              className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-1 focus:ring-black text-sm md:text-base"
              onClick={handleInputClick}
              readOnly
            />
          </div>
          <div className="flex justify-between items-center px-4 pb-4 flex-wrap gap-2">
            <button
              className="flex items-center gap-1 text-sm md:text-base"
              onClick={handleInputClick}
            >
              <FileQuestion className="w-5 h-5 md:w-6 md:h-6" />
              <span>Ask</span>
            </button>
            <button
              className="rounded-full px-4 py-2 bg-black text-white text-sm md:text-base hover:bg-gray-800 transition-colors"
              onClick={handleInputClick}
            >
              Post
            </button>
          </div>
        </div>
      </div>
      {/* Render the fetched situations */}
      {/* Posts Feed */}
      <div className="space-y-4 mt-4 px-2">
        {apiSituations.map((situation, index) => (
          <div key={situation.id} className="flex justify-center">
            <div className="w-full max-w-[95%] md:max-w-[85%] lg:max-w-[65%] bg-white rounded-lg border shadow">
              {/* Post Header */}
              <div className="flex justify-between items-center p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-black w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg md:text-xl font-bold">
                      {(situation.user?.name?.[0] || "A").toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">
                      {situation.user?.name || "Anonymous User"}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {new Date(situation.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleDeletePost(situation.id)}
                  className="text-gray-500 hover:text-gray-700 p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Post Content */}
              <div className="px-4 pb-4">
                <h2 className="text-lg md:text-xl font-semibold mb-2">
                  {situation.title}
                </h2>
                <p className="text-gray-600 text-sm md:text-base mb-4">
                  {situation.description}
                </p>
                {situation.image && (
                  <img
                    src={situation.image}
                    className="w-full max-h-64 object-cover rounded-lg"
                    alt="Post visual"
                  />
                )}
              </div>

              {/* Post Actions */}
              <div className="flex justify-between items-center px-4 pb-4 gap-2 flex-wrap">
                <button
                  className="flex items-center gap-1 text-sm md:text-base"
                  onClick={() => handleLike(situation.id)}
                >
                  <ThumbsUp className="w-5 h-5" />
                  <span>Like {situation.likes_count || 0}</span>
                </button>

                {situation.user?.id ===
                  JSON.parse(localStorage.getItem("user"))?.id && (
                  <button
                    className="flex items-center gap-1 text-sm md:text-base text-blue-600 hover:text-blue-800"
                    onClick={() => {
                      setEditingPost(situation);
                      setEditFormData({
                        title: situation.title,
                        description: situation.description,
                        image: null,
                      });
                    }}
                  >
                    <Pencil className="w-5 h-5" />
                    <span>Edit</span>
                  </button>
                )}

                <button
                  className="flex items-center gap-1 text-sm md:text-base"
                  onClick={() => handleCommentClick(situation.id, index)}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Comment</span>
                </button>
              </div>

              {/* Comments Section */}
              {openComment[index] && (
                <div className="border-t">
                  <div className="p-4 space-y-4">
                    <div className="flex gap-2 items-start">
                      <CircleUserRound className="w-8 h-8 flex-shrink-0" />
                      <input
                        type="text"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="Write Your Comment Here!"
                        className="w-full px-3 py-2 border rounded-full text-sm md:text-base"
                      />
                      <button
                        onClick={() =>
                          handleCommentSubmit(situation.id, commentText)
                        }
                        className={`px-4 py-2 rounded-full text-sm md:text-base ${
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
                        Add
                      </button>
                    </div>

                    <div className="space-y-3">
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
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Add this modal component near your existing modal */}
      {editingPost && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-2">
          <div className="bg-white rounded-lg w-full max-w-[95%] md:max-w-[85%] lg:max-w-[65%] max-h-[90vh] overflow-y-auto p-5">
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
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-2">
          <div className="bg-white rounded-lg w-full max-w-[95%] md:max-w-[85%] lg:max-w-[65%] max-h-[90vh] overflow-y-auto p-5">
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






