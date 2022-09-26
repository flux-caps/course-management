import { CourseManagementFrontendApi } from "./Api/CourseManagementFrontendApi.mjs";

try {
    const studies_selfservice_frontend_api = CourseManagementFrontendApi.new();

    await studies_selfservice_frontend_api.init();

    await studies_selfservice_frontend_api.showFrontend();
} catch (error) {
    console.error(error);
}