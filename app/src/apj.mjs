import { DataFetcher } from "./Adapter/DataFetcher/DataFetcher.mjs";
import { AggregateTable } from "./Core/Domain/Table/AggregateTable.mjs";

try {
    const dataFetcher = DataFetcher.new();
    const data = await dataFetcher.fetchData();

    const table = AggregateTable.new(data);
    table.render()
} catch (error) {
    console.error(error);
}