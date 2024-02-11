import React, { useEffect, useState } from "react";
import Navbars from "../../layouts/Navbars";
import backgroundImage from "./../../assets/favouritevents.png";
import FooterPage from "../../pages/footer/FooterPage";
import { Card } from "react-bootstrap";
import FavouriteEvents from "./FavouriteEvents";
import Swal from "sweetalert2";

const Wishlist = () => {
  const [wishlists, setWishlists] = useState([]);
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const fetchWishlistData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8088/wishlist/viewFavourite/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Error fetching wishlist data");
      }
    } catch (error) {
      console.error("Error fetching wishlist data:", error);
      return [];
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      const response = await fetch(
        `http://localhost:8088/wishlist/deleteFavourite/${eventId}/${userId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        // Fetch updated wishlist data after deletion
        const updatedWishlist = await fetchWishlistData();
        setWishlists(updatedWishlist);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Great!",
          text: "You have successfully removed the event from wishlist",
          showConfirmButton: true,
          timer: 10000,
        });
      } else {
        throw new Error("Error deleting event");
      }
    } catch (error) {
      console.error("Error deleting event:", error);

      Swal.fire({
        position: "center",
        icon: "error",
        title: "Oops! Something went wrong!",
        text: "Failed to remove event from your wishlist!",
        showConfirmButton: true,
        timer: 10000,
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const updatedWishlist = await fetchWishlistData();
      setWishlists(updatedWishlist);
    };

    fetchData();
  }, [token, userId]);

  return (
    <React.Fragment>
    <div>
      <Navbars />
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          padding: "20px",
        }}
      >
        <div>
          <Card>
            {wishlists.length > 0 ? (
              wishlists.map((wishlist) => (
                <div key={wishlist.wishlistId}>
                  <FavouriteEvents
                    wishlist={wishlist}
                    onDelete={() => handleDeleteEvent(wishlist.eventId)}
                  />
                </div>
              ))
            ) : (
              <p>No Events</p>
            )}
          </Card>
        </div>
      </div>
      <FooterPage />
    </div>
    </React.Fragment>
  );
};

export default Wishlist;
