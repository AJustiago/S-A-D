CREATE TABLE "public"."users" (
    "id" BIGSERIAL,
    "first_name" varchar(50) NOT NULL,
    "last_name" varchar(50) NOT NULL,
    "username" varchar(20) NOT NULL UNIQUE,
    "email" varchar(50) NOT NULL UNIQUE,
    "password" text NOT NULL
);

CREATE TABLE forums (
    "id" BIGSERIAL,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "building" VARCHAR(50) NOT NULL,
    "user_id" INT NOT NULL,
    "created_time" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE replies (
    "id" BIGSERIAL,
    "forum_id" BIGINT NOT NULL,
    "reply_id" BIGINT,
    "building_id" BIGINT NOT NULL,
    "content" TEXT NOT NULL,
    "user_id" BIGINT NOT NULL,
    "created_time" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);