import { takeLatest } from "@redux-saga/core/effects";
import { handle_Delete_product_api, handle_Get_product_api, handle_Post_product_api, handle_Put_product_api } from "../admin/manageProduct";
import {DELETE_PRODUCT_PROGRESS, GET_PRODUCT_PROGRESS, PATCH_PRODUCT_PROGRESS, POST_PRODUCT_PROGRESS } from "../../admin/action/action";


// get - product Saga...
export function* get_product_saga() {
    yield takeLatest(GET_PRODUCT_PROGRESS, handle_Get_product_api);
}

// POST - product saga
export function* post_product_saga() {
    yield takeLatest(POST_PRODUCT_PROGRESS, handle_Post_product_api);
  }

// DELETE - product saga
export function* delete_product_saga() {
    yield takeLatest(DELETE_PRODUCT_PROGRESS, handle_Delete_product_api);
  }

// PUT - product saga
export function* put_product_saga() {
  yield takeLatest(PATCH_PRODUCT_PROGRESS, handle_Put_product_api);
}
    