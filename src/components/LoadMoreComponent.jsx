import React, { useEffect } from "react";

export default function LoadMoreComponent(props) {
  const { fetchMoreAPODs } = props;
  useEffect(() => {
    fetchMoreAPODs();
  }, [fetchMoreAPODs]);
  return <div aria-hidden="true"></div>;
}
