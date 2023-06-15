import React, {FC} from 'react';
import {Pagination} from "antd";

type PropsType = {
  currentPage: number
  pagesCount: number
  pageSize: number
  changePageHandler: (page: number, pageSize: number) => void
}

const MyPagination: FC<PropsType> = (props) => {

  const changePageHandler = (page: number, pageSize: number) => {
    props.changePageHandler(page, pageSize)
  }

  return (
    <Pagination current={props.currentPage}
                total={props.pagesCount}
                pageSize={props.pageSize}
                pageSizeOptions={[8, 16, 32, 64]}
                onChange={changePageHandler}/>
  );
};

export default MyPagination;