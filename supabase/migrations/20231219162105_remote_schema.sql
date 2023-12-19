
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";

CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

SET default_tablespace = '';

SET default_table_access_method = "heap";

CREATE TABLE IF NOT EXISTS "public"."players" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "dni" "text" NOT NULL,
    "name" "text" NOT NULL,
    "lastname" "text" NOT NULL,
    "birthdate" "date" NOT NULL,
    "cellphone" "text",
    "email" "text",
    "observations" "text",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "active" boolean DEFAULT true NOT NULL
);

ALTER TABLE "public"."players" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."players_sports" (
    "created_at" timestamp with time zone DEFAULT "now"(),
    "federated" boolean DEFAULT false NOT NULL,
    "player_id" "uuid" NOT NULL,
    "sport_id" "uuid" NOT NULL
);

ALTER TABLE "public"."players_sports" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."players_teams" (
    "created_at" timestamp with time zone DEFAULT "now"(),
    "player_id" "uuid" NOT NULL,
    "team_id" "uuid" NOT NULL
);

ALTER TABLE "public"."players_teams" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."sports" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "name" "text" NOT NULL
);

ALTER TABLE "public"."sports" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."teams" (
    "created_at" timestamp with time zone DEFAULT "now"(),
    "name" "text" NOT NULL,
    "sport_id" "uuid" NOT NULL,
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "active" boolean DEFAULT true NOT NULL
);

ALTER TABLE "public"."teams" OWNER TO "postgres";

ALTER TABLE ONLY "public"."players"
    ADD CONSTRAINT "players_dni_key" UNIQUE ("dni");

ALTER TABLE ONLY "public"."players"
    ADD CONSTRAINT "players_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."players_sports"
    ADD CONSTRAINT "players_sports_pkey" PRIMARY KEY ("player_id", "sport_id");

ALTER TABLE ONLY "public"."players_teams"
    ADD CONSTRAINT "players_teams_pkey" PRIMARY KEY ("player_id", "team_id");

ALTER TABLE ONLY "public"."sports"
    ADD CONSTRAINT "sports_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."teams"
    ADD CONSTRAINT "teams_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."players_sports"
    ADD CONSTRAINT "players_sports_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "public"."players"("id") ON DELETE CASCADE;

ALTER TABLE ONLY "public"."players_sports"
    ADD CONSTRAINT "players_sports_sport_id_fkey" FOREIGN KEY ("sport_id") REFERENCES "public"."sports"("id") ON DELETE CASCADE;

ALTER TABLE ONLY "public"."players_teams"
    ADD CONSTRAINT "players_teams_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "public"."players"("id") ON DELETE CASCADE;

ALTER TABLE ONLY "public"."players_teams"
    ADD CONSTRAINT "players_teams_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE SET NULL;

ALTER TABLE ONLY "public"."teams"
    ADD CONSTRAINT "teams_sport_id_fkey" FOREIGN KEY ("sport_id") REFERENCES "public"."sports"("id");

CREATE POLICY "Enable insert for authenticated users only" ON "public"."players" TO "authenticated" USING (true) WITH CHECK (true);

CREATE POLICY "Enable insert for authenticated users only" ON "public"."players_sports" FOR INSERT TO "authenticated" WITH CHECK (true);

CREATE POLICY "Enable insert for authenticated users only" ON "public"."players_teams" FOR INSERT TO "authenticated" WITH CHECK (true);

CREATE POLICY "Enable insert for authenticated users only" ON "public"."teams" FOR INSERT TO "authenticated" WITH CHECK (true);

CREATE POLICY "Enable read access for all users" ON "public"."players" FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."players_sports" TO "authenticated" USING (true) WITH CHECK (true);

CREATE POLICY "Enable read access for all users" ON "public"."players_teams" TO "authenticated" USING (true) WITH CHECK (true);

CREATE POLICY "Enable read access for all users" ON "public"."sports" FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."teams" FOR SELECT USING (true);

CREATE POLICY "Enable update for authenticated users" ON "public"."teams" FOR UPDATE TO "authenticated" USING (true) WITH CHECK (true);

ALTER TABLE "public"."players" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."players_sports" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."players_teams" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."sports" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."teams" ENABLE ROW LEVEL SECURITY;

REVOKE USAGE ON SCHEMA "public" FROM PUBLIC;
GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

GRANT ALL ON TABLE "public"."players" TO "anon";
GRANT ALL ON TABLE "public"."players" TO "authenticated";
GRANT ALL ON TABLE "public"."players" TO "service_role";

GRANT ALL ON TABLE "public"."players_sports" TO "anon";
GRANT ALL ON TABLE "public"."players_sports" TO "authenticated";
GRANT ALL ON TABLE "public"."players_sports" TO "service_role";

GRANT ALL ON TABLE "public"."players_teams" TO "anon";
GRANT ALL ON TABLE "public"."players_teams" TO "authenticated";
GRANT ALL ON TABLE "public"."players_teams" TO "service_role";

GRANT ALL ON TABLE "public"."sports" TO "anon";
GRANT ALL ON TABLE "public"."sports" TO "authenticated";
GRANT ALL ON TABLE "public"."sports" TO "service_role";

GRANT ALL ON TABLE "public"."teams" TO "anon";
GRANT ALL ON TABLE "public"."teams" TO "authenticated";
GRANT ALL ON TABLE "public"."teams" TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";

RESET ALL;
