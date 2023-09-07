.PHONY: protoc
protoc:
    @protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=. ./web/*.proto
	@protoc --proto_path=web --go_out=web --go_opt=paths=source_relative ./web/*.proto


	@protoc --proto_path=manage --go_out=manage --go_opt=paths=source_relative ./manage/*.proto
	@protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=. ./manage/*.proto