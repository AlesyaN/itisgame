package servlets.mafia;

import freemarker.template.Template;
import freemarker.template.TemplateException;
import org.json.JSONObject;
import servlets.helper.Helper;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;

public class MafiaServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if (request.getParameter("names") != null && request.getParameter("mafia") != null
                && request.getParameter("detective") != null && request.getParameter("doctor") != null
                && request.getParameter("innocent") != null) {
            JSONObject jo = new JSONObject();
            jo.put("url", "mafia?names=" + request.getParameter("names") +
                            "&mafia=" + request.getParameter("mafia") +
                            "&detective=" + request.getParameter("detective") +
                            "&doctor=" + request.getParameter("doctor") +
                            "&innocent=" + request.getParameter("innocent")
            );
            response.setContentType("text/json");
            response.getWriter().println(jo.toString());
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if (request.getParameter("names") != null && request.getParameter("mafia") != null
                && request.getParameter("detective") != null && request.getParameter("doctor") != null
                && request.getParameter("innocent") != null) {
            Template t = Helper
                    .getConfig(request.getServletContext())
                    .getTemplate("mafia/mafia.ftl");
            HashMap<String, Object> root = new HashMap<>();
            root.put("form_url", request.getRequestURI());
            root.put("players", request.getParameter("names"));
            root.put("mafia", request.getParameter("mafia"));
            root.put("detective", request.getParameter("detective"));
            root.put("doctor", request.getParameter("doctor"));
            root.put("innocent", request.getParameter("innocent"));
            t.setOutputEncoding("UTF-8");
            response.setContentType("text/html;charset=utf-8");
            try {
                t.process(root, response.getWriter());
            } catch (TemplateException e) {
                e.printStackTrace();
            }
        }
    }
}
