package net.lafox.ihor.backend.util;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public final class JsonUtil {
  private static final Gson gson = new GsonBuilder().setPrettyPrinting().create();

  public static String prettyJson(Object obj) {
    return gson.toJson(obj);
  }
}
