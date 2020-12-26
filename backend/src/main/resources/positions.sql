DO
$do$
    BEGIN
        FOR x_i IN 0..9
            LOOP
                FOR y_i IN 0..9
                    LOOP
                        INSERT INTO position (id, x, y)
                        VALUES (10 * x_i + y_i, x_i, Y_i);
                    END LOOP;
            END LOOP;
    END
$do$;