import http from "@/api";
import { Config } from "@/api/interface";
import { ServerConfig } from "@/components/ServerConfigForm/interface";

export const getServerConfigFromFileApi = () => {
  return http.get<Config.Server.ResConfig>(`/config/file`);
};

export const saveServerConfigApi = (data: ServerConfig.Config) => {
  return http.post<ServerConfig.Config>(`/config/save`, data);
};
