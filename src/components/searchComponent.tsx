import { useState, useContext } from "react";
import { searchContext } from "../context /SearchContext";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchLabel = styled.label`
  margin-bottom: 5px;
`;

const SearchInput = styled.input`
  width: 15rem;
  text-align: center;
  margin-bottom: 1rem;
`;

type propsType = {
  title: string;
};

const SearchComponent = (props: propsType) => {
  const context = useContext(searchContext);

  return (
    <>
      <SearchContainer>
        <SearchLabel>Search in {props.title}</SearchLabel>
        <SearchInput
          type="text"
          placeholder="Search...."
          onChange={(e) => {
            context?.setSearchTerm(e.target.value);
          }}
        ></SearchInput>
      </SearchContainer>
      {context?.searchTerm && (
        <h1 style={{ marginLeft: "2rem" }}>Sökning: {context.searchTerm}</h1>
      )}
    </>
  );
};

export default SearchComponent;
